# HA-website-with-cloudfront
![Infastructure design](https://github.com/PHIDELIST/HA-website-with-cloudfront/blob/main/design/HA-WebApp.png)
## Containerizing the frontend(insurance-landing-page)
+ Build container ```docker build -t insurance-landing-page ../insurance-landing-page```
+ Run Container ```docker run -p 3000:3000 -d insurance-landing-page```
