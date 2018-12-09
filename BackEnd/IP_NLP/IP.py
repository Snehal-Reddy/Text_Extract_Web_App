#google OCR or its equivalent shit dropped here
import os
import numpy as np 
import img2pdf
import cv2

from google.cloud import vision
from google.cloud.vision import types

def deal_with_response(response):
	for sentence in response.pages[0].paragraphs:
		sent = ''
		for word in sentence.words:
			words = ''
			for chars in word.symbols:
				words += chars.text
			words += words + ' '

CLIENT = vision.ImageAnnotatorClient()

def connect_ocr(img):
	file_name = os.path.join(img.images_path, img.image_name)
	cont = io.open(file_name, 'rb').read()
	final_img = types.Image(content = cont)
	response = CLIENT.document_text_detection(image = final_img)
	data = deal_with_response(response.full_text_annotation)
	return data

if __name__ == 'main':
	print("Vision in")

