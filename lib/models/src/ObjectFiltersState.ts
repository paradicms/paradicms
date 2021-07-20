import {ObjectFilters} from "./ObjectFilters";
import {PropertyFilter} from "./PropertyFilter";
import {Property} from "./Property";
import {StringValueFacetFilterState} from "./StringValueFacetFilterState";
import {ObjectFacets} from "./ObjectFacets";

export class ObjectFiltersState {
  private readonly facets: ObjectFacets;
  private filters: ObjectFilters;

  constructor(kwds: {facets: ObjectFacets; filters: ObjectFilters}) {
    this.facets = kwds.facets;
    this.filters = kwds.filters;
  }

  excludeProperty(property: Property): void {
    this.includeOrExcludeProperty(false, property);
  }

  get excludedProperties(): readonly Property[] {
    const excludedProperties: Property[] = [];
    if (this.filters.properties) {
      for (const propertyFilter of this.filters.properties) {
        if (!propertyFilter.excludeValues) {
          continue;
        }
        for (const exclude of propertyFilter.excludeValues) {
          excludedProperties.push({
            uri: propertyFilter.propertyDefinitionUri,
            value: exclude,
          });
        }
      }
    }
    return excludedProperties;
  }

  get includedProperties(): readonly Property[] {
    const includedProperties: Property[] = [];
    if (this.filters.properties) {
      for (const propertyFilter of this.filters.properties) {
        if (!propertyFilter.includeValues) {
          continue;
        }
        for (const include of propertyFilter.includeValues) {
          includedProperties.push({
            uri: propertyFilter.propertyDefinitionUri,
            value: include,
          });
        }
      }
    }
    return includedProperties;
  }

  includeProperty(property: Property): void {
    this.includeOrExcludeProperty(true, property);
  }

  private includeOrExcludeProperty(include: boolean, property: Property): void {
    let propertyFilter = this.propertyFilter(property.uri);
    const propertyFilterState = new StringValueFacetFilterState({
      filter: propertyFilter,
      valueUniverse: this.propertyValueUniverse(property.uri),
    });
    propertyFilterState.includeValue(property.value.toString());
    const propertyFilterStateSnapshot = propertyFilterState.snapshot;
    if (propertyFilterStateSnapshot) {
      this.setPropertyFilter({
        propertyDefinitionUri: property.uri,
        ...propertyFilterStateSnapshot,
      });
    } else {
      this.removePropertyFilter(property.uri);
    }
  }

  propertyFilter(propertyDefinitionUri: string): PropertyFilter | null {
    return (
      this.filters.properties?.find(
        propertyFilter =>
          propertyFilter.propertyDefinitionUri === propertyDefinitionUri
      ) ?? null
    );
  }

  propertyValueUniverse(propertyDefinitionUri: string): readonly string[] {
    if (!this.facets.properties) {
      throw new EvalError("expected facets to have properties");
    }
    for (const propertyFacet of this.facets.properties) {
      if (propertyFacet.definition.uri === propertyDefinitionUri) {
        return propertyFacet.values.map(value => value.value);
      }
    }
    throw new EvalError(
      `unable to find property facet for ${propertyDefinitionUri}`
    );
  }

  removePropertyFilter(propertyDefinitionUri: string): void {
    console.debug("remove property filter: " + propertyDefinitionUri);

    const {
      properties: oldPropertyFilters,
      ...otherObjectFilters
    } = this.filters;
    if (!oldPropertyFilters) {
      console.debug("no property filters to remove");
      return;
    }

    console.debug("old property filters:", JSON.stringify(oldPropertyFilters));

    // Remove the key's filter and then add it back
    const newPropertyFilters = oldPropertyFilters.filter(
      propertyFilter =>
        propertyFilter.propertyDefinitionUri !== propertyDefinitionUri
    );

    if (newPropertyFilters.length === 0) {
      console.debug("removed all property filters");
      this.filters = {properties: null, ...otherObjectFilters};
    } else {
      console.debug(
        "new property filters:",
        JSON.stringify(newPropertyFilters)
      );
      this.filters = {
        ...otherObjectFilters,
        properties: newPropertyFilters,
      };
    }
  }

  setPropertyFilter(propertyFilter: PropertyFilter): void {
    const {
      properties: oldPropertyFilters,
      ...otherObjectFilters
    } = this.filters;

    console.debug("old property filters:", JSON.stringify(oldPropertyFilters));

    let newPropertyFilters: PropertyFilter[];
    if (!oldPropertyFilters) {
      newPropertyFilters = [];
    } else {
      // Remove the key's filter and then add it back
      newPropertyFilters = oldPropertyFilters.filter(
        oldPropertyFilter =>
          oldPropertyFilter.propertyDefinitionUri !==
          propertyFilter.propertyDefinitionUri
      );
    }
    newPropertyFilters.push(propertyFilter);

    console.debug("new property filters:", JSON.stringify(newPropertyFilters));

    this.filters = {
      ...otherObjectFilters,
      properties: newPropertyFilters,
    };
  }

  get snapshot(): ObjectFilters {
    return this.filters;
  }
}
