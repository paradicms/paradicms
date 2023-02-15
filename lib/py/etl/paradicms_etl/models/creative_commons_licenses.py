# -*- coding: utf-8 -*-

from rdflib import Graph, URIRef
from paradicms_etl.models.license import License
from paradicms_etl.models.model_singletons import ModelSingletons


class CreativeCommonsLicenses(ModelSingletons):
    _MODEL_CLASS = License


