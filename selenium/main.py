from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
import time

# Setup Chrome WebDriver
options = Options()
options.add_experimental_option("detach", True)  # Keep browser open
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=options)

# ✅ Open the login page
driver.get("https://kuzco.xyz/login")
time.sleep(5)  # Allow time for the page to load

# ✅ Find login fields and enter credentials
driver.find_element(By.NAME, "email").send_keys("devendergarg210@gmail.com")
driver.find_element(By.NAME, "password").send_keys("Raj@1234")
driver.find_element(By.NAME, "password").send_keys(Keys.RETURN)

# ✅ Wait for login to complete and navigate to the target URL
time.sleep(5)  # Allow login to process

# ✅ Navigate to dashboard/workers
driver.get("https://kuzco.xyz/dashboard/workers")
driver.maximize_window()

# ✅ Optionally, save session cookies
cookies = driver.get_cookies()
print("Saved Cookies:", cookies)

# ✅ If required, inject session into local storage
driver.execute_script("window.localStorage.setItem('session', 'your-session-value');")
