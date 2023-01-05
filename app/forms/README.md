# Forms

React Native mobile application for creating knowledge graphs using data entry forms generated from SHACL shapes graphs.

### Requirements

### Minimum Viable Product

* Select a shapes graph from a list of two or more baked into the app
* Given a selected shapes graph
    * Select an existing data graph to view/edit
    * Add a new data graph to view/edit and select it
    * Delete a data graph
* Given a selected data graph
    * Select a top-level shape from a list
    * Share the data graph as sorted n-triples via the Share... dialog
* Given a selected top-level shape
    * Select an existing instance to view/edit
    * Add a new instance to view/edit and select it
    * Delete an instance
* Given a selected instance of a top-level shape
    * View single-value properties
        * Connected instance (other top-level shape)
        * Date-time
        * Enum
        * Number
        * String
        * Sub-instance (blank node)
    * Edit (delete and update) single-value properties
        * Boolean
        * Connected instance (other top-level shape)
        * Date-time
        * Enum
        * Number
        * String
        * Sub-instance (blank node)

### Enhancements

#### Multi-value property editing

* Given a selected instance of a top-level shape
    * View multi-value properties
        * Connected instance (other top-level shape)
        * Date-time
        * Enum
        * Number
        * String
        * Sub-instance (blank node)
    * Edit (create, delete, update) multi-value properties
        * Boolean
        * Connected instance (other top-level shape)
        * Date-time
        * Enum
        * Number
        * String
        * Sub-instance (blank node)

#### Synchronization with an API

* Push to an API endpoint, user-initiated
  * Shapes graph(s)
  * Data graph(s)
* Pull from an API endpoint, user-initiated
  * Shapes graph(s)
  * Data graph(s)

#### Custom property value editors and viewers

* Wikidata concept lookup