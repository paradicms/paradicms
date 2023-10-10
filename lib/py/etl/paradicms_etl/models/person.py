from abc import abstractmethod

from paradicms_etl.models.agent import Agent


class Person(Agent):
    @property
    @abstractmethod
    def family_name(self) -> str | None:
        raise NotImplementedError

    @property
    @abstractmethod
    def given_name(self) -> str | None:
        raise NotImplementedError
