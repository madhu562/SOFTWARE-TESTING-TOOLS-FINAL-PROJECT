from logging import error
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait

driver = webdriver.Chrome()
driver.get("file:///C:/Users/Chand/OneDrive/Desktop/SEEPROJECT/siliviyaProj/FinalProject/SignUp.html")
driver.find_element_by_id("email").send_keys("saicha104@gmail.com")
driver.find_element_by_id("password").send_keys("123456")
driver.find_element_by_name("signin").click()
WebDriverWait(driver=driver, timeout=10).until(
    lambda x: x.execute_script("return document.readyState === 'complete'")
)
error_message = "Incorrect username or password."
# get the errors (if there are)
errors = driver.find_elements_by_class_name("flash-error")
# print the errors optionally
# for e in errors:
#     print(e.text)
# if we find that error message within errors, then login is failed
if any(error_message in e.text for e in errors):
    print("[!] signin failed")
else:
    print("[+] signin successful")
