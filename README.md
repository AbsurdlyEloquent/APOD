# APOD

This is my first attempt at integrating an API into a website.

You can find the page deployed here: 

https://absurdlyeloquent.github.io/APOD/

The website displays photos from NASA's Astronomy Picture of the Day (APOD) api.

When a photo is clicked, a modal popup appears, providing a title and description of the photo

Upon loading the page, a Fetch request is started. The request returns 20 objects containing all the data of each item.

The boxes are generated in a `for` loop, counting from 0-19 and all the information from each object is pushed to one box.

**This is all based around the data from the initial `fetch`, with the objects simply being passed around to various arrays and divs.**
