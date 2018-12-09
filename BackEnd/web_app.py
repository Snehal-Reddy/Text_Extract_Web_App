#put the flask crap here
from flask import Flask, render_template ,url_for
from flask import send_file, send_from_directory, request, Response
from flask_socketio import SocketIO
import requests
from vision import get_text

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app)

REQUESTS_SESSION = requests.Session() 
app.logger.addHandler(logging.FileHandler('server.log'))
app.logger.setLevel(logging.DEBUG)

@app.route('/')
def root():
	return "congo"

home = os.path.dirname(os.path.realpath(__file__))

@app.route('/upload', methods = ['POST'])
def get_image_text():
	app.logger.info(home)
	img = request.files['image']
	try:
		os.makedirs(home+'/final_images')   
		filename = "iimmaaggee_"+img.filename.replace('/','')
		path = os.path.join(home+'/final_images',filename)
		app.logger.info("saving")
		img.save(path) 
		text = get_text(home+'/final_images',filename)	
		#use_text_in_a_nice_way
	except:
		return Response("Error getting image",status = 401)
