import time
import json
import cv2
import pickle
import math
from PIL import ImageFont, ImageDraw, Image
from IP_NLP import IP

def get_text(actual_path,name):
	ocr_data = IP.connect_ocr(actual_path,name)
	get_all_text(ocr_data)