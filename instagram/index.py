import requests
from bs4 import BeautifulSoup

def download_instagram_reel(url):
    headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.5",
}
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, "html.parser")
    
    # Extract video URL from the page source
    video_url = soup.find('meta', property='og:video')['content']

    meta_tag = soup.find('meta', property='og:video')
    if meta_tag:
        video_url = meta_tag['content']
        print("Video URL:", video_url)
    else:
        print("Video URL not found!")


        print(soup.prettify())


    
    # Download the video
    video_response = requests.get(video_url)
    with open('instagram_reel.mp4', 'wb') as file:
        file.write(video_response.content)
    print("Reel downloaded successfully!")

# Example URL of an Instagram reel
url = 'https://www.instagram.com/reel/DGIGyJwNzL-/?igsh=MTcwZzFvbGtjY2xhYw=='
download_instagram_reel(url)
