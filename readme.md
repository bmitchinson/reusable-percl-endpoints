## Reusable Percl Endpoints

In combination with my-json-server and a small free heroku dyno,
this repo functions as a lightweight API.

For a deployed example visit: https://reusable-percl-endpoints.herokuapp.com/

Each endpoint is defined in `db.json`, and all POST GET PUT etc are treated as
GET requests internally, meaning that that data is immutable.

This is great for example applications that rely on assumed responses.
For example, setting up call forwarding for a franchise, and assuming they have
some existing locations. "Existing location" PerCL will be defined
statically here, and associated with a number + application on an existing
FreeClimb account.

Example voiceURL webhook route: https://reusable-percl-endpoints.herokuapp.com/deerfieldSpaInbound

This allows new users to reference existing phonelines
like simulated voicemail boxes etc, without having to configure it themselves
while learning.

Additionally, if your application is completely static, you could host your
entire FreeClimb application out of a github repo like this just by writing
PerCL response objects + no code.

## Putting it online for free with Heroku

### Why Heroku

Heroku lets us make these endpoints accessible 24/7 for free. If the site
hasn't been interacted with within 30 minutes, it goes to "sleep" meaning it's
frozen in place. A site "awakens" once it's been interacted with again. So far,
I haven't noticed this causing problems in FreeClimb, as when a site is asleep,
the phone call just waits for a moment for it to awaken. From that initial
request, everything else is responsive.

### Deploying in 4 steps

1. Install the Heroku CLI - https://devcenter.heroku.com/articles/heroku-cli
2. `heroku login` will help you create a heroku account, and pass a token back
   to your CLI. Your machine is now logged in.
3. `heroku create {site-name}`
4. `git push heroku master`

Step four will push any code that's currently commited to your master branch,
to heroku. -> Any code that is not commited to git will not be deployed.

Once pushed, you can use `heroku open` to open your browser to your site, and
`heroku logs --tail` to view the server logs incase there were any errors.

## Using it locally

If you'd like to try using the server locally, use the `npm run start`
or `npm run dev` commands, and your server will start on port 3001 locally.
