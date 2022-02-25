from flask import Blueprint, request
from controllers.GamesController import Games 


pages = Blueprint('pages', __name__, url_prefix='/')

@pages.route('')
def index():
    return Games().teste(request)

@pages.route('Games', methods=['GET'])
def all_games():
    return Games().index(request)

