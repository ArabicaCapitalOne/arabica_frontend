# arabica_frontend

## Inspiration
I found personal finance management systems in the market are not perfect.
For example, Mint, who is the leader of the field. It has **FOUR** main problems:
1. Lack of Information. Each bill, purchase, loan and transfer does not have details. Users do not know when and where the payments happen. The status is also really vague. These lead to a bad UX because it does not provide enough information a personal finance management system should have.
2. Bad Categorizing Process. I used Mint for a month. I found that a lot of online Merchants and payments do not have categories. What Mint does is to let users change and update one by one, one click by one click. While, I believe that most users do not open the app daily, which means that they will deal with categorizing dozens in one sit. So users need a faster and more intuitive UX, not like Mint.
3. Lack of details. They are just several categories let users choose. Simpleness is great, but not here.
4. Bad Data Virtualization. The little chart in the Mint provides zero useful information for users to have a general view of their finance information.

Therefore, I decided to make a whole new version of personal finance management system using Nessie to solve these problems.

## What it does
Tracking, virtualizing and categorizing their personal finance information.
1. Intuitive Categorization.
2. More details. Especially the merchant side.
3. More choices to compare personal finance information.

## How I built it
It is a single-page web application, running on webpack server. Nessie provides all the necessary data. 

## Challenges I ran into
1. _Purchase_ cannot be updated, so I had a hard time to find a way store the new categorization back to the Nessie server.
2. I am good at designing, so the whole theme is too dull.

## Accomplishments that I'm proud of
I finished most of the parts, which are enough for me to show my ideas about UX. 

## What I learned
I fully appreciate and master Nessie API.

## What's next for Arabica
I will implement my app to Node.JS server and run on AWS PaaS. Then, I want to build a native app (using Nativescript) and a progressive web app to increase the number of users and upgrade cross-platform UX. I want this project to be fast, responsive, reliable and powerful.

