#translation shit should be dropped here

import sys
import re
import urllib2
import urllib
import HTMLParser

hdr = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
       'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'}

def translate(s):
	parser = HTMLParser.HTMLParser()
	link ="http://translate.google.com/m?hl=%s&sl=%s&q=%s"%("en","auto",s)
	request = urllib2.Request(link, headers=hdr)
	raw_data = urllib2.urlopen(request).read()
	data = raw_data.decode("utf-8")
	expr = r'class="t0">(.*?)<'
	re_result = re.findall(expr, data)
	return(parser.unescape(re_result[0]))

#print(translate("bonjour"))