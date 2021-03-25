from logging import error
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait

driver = webdriver.Chrome()
driver.get("file:///C:/Users/Chand/OneDrive/Desktop/SEEPROJECT/siliviyaProj/FinalProject/AfterLogin/recipies.html")
driver.find_element_by_class_name('dropdown').click()
driver.find_element_by_class_name('dropdown-content').click()
WebDriverWait(driver=driver, timeout=10).until(
    lambda x: x.execute_script("return document.readyState === 'complete'")
)
error_message = "Incorrect click."
# get the errors (if there are)
errors = driver.find_elements_by_class_name("flash-error")
# print the errors optionally
# for e in errors:
#     print(e.text)
# if we find that error message within errors, then login is failed
if any(error_message in e.text for e in errors):
    print("[!] click failed")
else:
    print("[+] click successful")
