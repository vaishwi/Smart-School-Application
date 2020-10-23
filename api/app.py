# pip install flask
from flask import Flask
from flask_cors import CORS, cross_origin
from flask import jsonify
import pandas as pd
import json
#initialize the app form flask
app = Flask(__name__)

cors = CORS(app)

app.config['CORS_HEADERS'] = 'Content-Type'

#define a route to hello world function
@app.route('/')
def hello_world():
    return 'Hello world!'


@app.route('/api',methods =['GET','POST'])
@cross_origin()
def api():
   
    #resp = jsonify({'userid':1,'title':'Flask with react','completed':False})
    return {'userid':1,'title':'Flask with react app','completed':False}
            
    #return resp

@app.route('/classname',methods = ['GET'])
@cross_origin()
def classname():
    df = pd.read_csv('.\classDetails.csv')
    #print(df.head)
    out = df.to_json(orient = "records")
    #print(out)
    
    return out

@app.route('/classname/<cname>')
def findStudent(cname):
    #name1 = ".\"
    name = ".csv"
    csvName = cname+name
    
    df = pd.read_csv(csvName)
    #print(df.head)
    out = df.to_json(orient = "records")
    print("Class name:",csvName)
    return out


if __name__ == '__main__':
    #Run the app on http://localhost:8085
    app.debug = True
    # host = 0.0.0.0 or 127.0.0.1
    app.run(host='127.0.0.1',port=5000)
