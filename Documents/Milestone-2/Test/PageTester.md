To check if the webpage up and running, use the following code on your local terminal or colab.

Setup: pip install requests beautifulsoup4

Code to run the test: 
import requests
from bs4 import BeautifulSoup

# Define the URL
url = "https://shopzone-app.netlify.app"

# Send an HTTP GET request to the URL
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the HTML content of the page
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find and extract the title tag
    title_tag = soup.find('title')

    # Check if the title tag exists and contains text
    if title_tag and title_tag.string:
        print(f"Title: {title_tag.string}")
    else:
        print("Title not found on the webpage.")
else:
    print(f"Failed to fetch the webpage. Status code: {response.status_code}")