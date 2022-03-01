from flask import jsonify
from models import GamesModel


class Games:
    def __init__(self):
        self.games = GamesModel.Games()
        
    def new_game(self, req):
        try:
            if req.method == 'GET':
                games = self.games.find({})
                return jsonify(games)
            elif req.method == 'POST':
                data = req.get_json()
                
                title = data['title']
                genre = data['genre']
                played = data['played']
                
                can_play = True
                if not title or not genre:
                    can_play = False
                    
                if can_play:
                    new_game = {
                        "title": title,
                        "genre": genre,
                        "played": played,
                    }
                    
                    self.games.create(new_game)
                       
        except Exception as e:
            print(e)
            
    def update_game(self, req):
        if req.method == 'POST':
            try:
                gameByID = req.get_json()
                title = gameByID['title']
                genre = gameByID['genre']
                played = gameByID['played']
                
                can_play = True
                if not title or not played:
                    can_play = False
                                        
                if can_play:
                    edit_game = {
                        'title': title,
                        'genre': genre,
                        'played': played,
                    }
                    
                    self.games.update({'_id': gameByID['id']}, edit_game) 
            
            except Exception as e:
                print(e)
            
    def delete_game(self, req):
        if req.method == 'POST':
            gameByID = req.get_json()['id']
            self.games.delete({'_id': gameByID})
            
                
            