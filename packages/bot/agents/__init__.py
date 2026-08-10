from .hello_agent import HelloAgent
from .help_agent import HelpAgent
from .add_vacancy_agent import AddVacancyAgent
from .search_vacancy_agent import SearchVacancyAgent
from .profile_agent import ProfileAgent
from .cv_agent import CVAgent
from .cv_agent import AgentBase

agents = {
          'hello_agent': HelloAgent(),
          'help_agent': HelpAgent(),
          'add_vacancy_agent': AddVacancyAgent(),
          'search_vacancy_agent': SearchVacancyAgent(),
          'profile_agent': ProfileAgent(),
          'cv_agent': CVAgent(),
          }
