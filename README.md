# CS532
CS532 Group Project Fall 2021

NOTE: SECRET_KEY and SQLALCHEMY_DATABASE_URI are set to ENVIRONMENT variables. Modify your bashrc or other shell initializiation folder (zshrc, or set using windows commands if on that OS | you can set these values to anything at the moment, but these will be importantly hidden out of production code for security reasons when the program is deployed)

1. This application is currently under development using Python 3.8.10. 
2. In order to launch the site, you will need to set up the virtual environment first.
3. Once you have set up/cloned the repository, navigate to the top level directory. (contains <code>health_app/</code> folder, <code>requirements.txt</code>, etc.)
4. Create a new virtual environment in the top level directory by running the command <code>python3 -m venv venv/</code>, which will create a directory venv/ with the enviroment. 
5. Activate the virtual environment by running <code>source venv/bin/activate</code> while in top level directory. 
6. Update the enviroment with the necessary dependencies from <code>requirements.txt</code> by running the command <code>pip3 install -r requirements.txt</code>
7. Once your venv is activated and the dependencies are installed, you can launch the site by running the command <code>python run.py</code>.
8. Navigate to the site by opening a web browser and entering <code>http://localhost:5000/</code> in the URL. 
