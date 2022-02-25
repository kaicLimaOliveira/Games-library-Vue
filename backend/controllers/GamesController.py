from flask import jsonify


class Games:
    def __init__(self):
        pass
    
    def index(self, req):
        try:
            GAMES = [
                {
                    'title': 'The last of us',
                    'genre': 'Survival Horror',
                    'played': True
                },
                {
                    'title': 'Rainbow Six Siege',
                    'genre': 'FPS',
                    'played': True
                },
                {
                    'title': 'Fifa 2021',
                    'genre': 'Esporte',
                    'played': True
                }
                
            ]
            
            return jsonify({
                "Games": GAMES
            })
        except Exception as e:
            print(e)
                
                
    def teste(self, req):
        return 'Hello'