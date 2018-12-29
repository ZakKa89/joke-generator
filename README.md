## What is this?

An assignment I had to make to showcase my programming skills. Bootstrapped with create-react-app.

## The (combined) Assignment

### 1. Login App
Create a login popup that will log you in for the current session. And only appear when the user hasn't
logged in yet for the current session.
The login form should consist of a username and password which must comply to the following password
security requirements:
Passwords must include one increasing straight of at least three letters, like abc , cde , fgh ,
and so on, up to xyz . They cannot skip letters; acd doesn't count.
Passwords may not contain the letters i, O, or l, as these letters can be mistaken for other characters
and are therefore confusing.
Passwords must contain at least two non-overlapping pairs of letters, like aa, bb, or cc.
Passwords cannot be longer than 32 characters.
Passwords can only contain lower case alphabetic characters.

#### note from myself: for the iOl check, I made the assumption that it's about the specific characters: lowercase i, uppercase O and lowercase l.

### 2. Chuck Norris Joke generator
We want an Application where we can fetch 10 Random Chuck Norris jokes. These jokes can be fetched
from the following API http://api.icndb.com/jokes/random/10.
When these jokes are fetched via a button they need to be displayed in a list. In this list we can mark
certain jokes as favourite. The favourite jokes will appear in a favourites list with a max of 10 unique items.
There should be an option to remove jokes from the favourite list as well.
On refresh the favourites lists should be stored so next time when i visit the app my favourites should be
present.
We can also turn a timer on/off via a button (every 5 seconds). This will add one random joke to the
favourites list http://api.icndb.com/jokes/random/1 until the list has 10 items.

## How to run

In the project directory, you can run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
