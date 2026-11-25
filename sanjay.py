

from flask import *
app=Flask(__name__)

@app.routr('/ ')
def  kiran( name):
       return render_template(‘index.html’ ) 
if__name__=='__main__'
app.run(debug = True)
