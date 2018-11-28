#put the flask crap here
from flask import Flask, render_template ,url_for
from flask import send_file, send_from_directory, request, Response
from flask_socketio import SocketIO
import requests

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def root():
	return "congo"

home = os.path.dirname(os.path.realpath(__file__))

@app.route('/upload', methods = ['POST'])
def get_image():
	app.logger.info(home)
	img = request.files['image']
	try:
		os.makedirs(home+'/final_images')   
		path = os.path.join(home+'/final_images',img.filename)
		img.save(path) 	
	except:
		return Response("Error getting image",status = 401)
