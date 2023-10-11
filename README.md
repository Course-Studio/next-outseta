# A NEXT.js implementation with Outseta

This is an experimental project where we use Outseta on a NEXT.js project. NEXT.js has some caveats as it's an SSR based system. We're also utilising the new APP router from NEXT.js. I've managed to solve the majority of the caveats, but we're still running into a few fringe cases.

## Getting Started

We've got 4 basic routes on this demo:

- Home: just the standard route with the header
- Login: This contains a the `<Login />` component that has the Outseta login embed.
- Register: This contains a the `<Register />` component that has the Outseta register embed.
- Profile: This contains a the `<Profile />` component that has the Outseta profile embed.

## Sessions

We tried getting it to work with [NextAuth](https://next-auth.js.org/), but could not get it working due to lack of support. This might need a custom adapter. We're instead building our own basic session manager.

We grab the token in the login callback, verify the token, and then set a session cookie (`api/auth/login/route.js`). In our `middleware.js`, we check that cookie and protect the `/profile` route.

# Issues

There are a few issues that popped up with this implementation:

- The _Profile_ embed sometimes do not display the contents. We can see that it has been processed. We think it's because it's not getting the access token properly. You can view how we handle it on the component (`components/Outseta/profile.jsx`).
- How can we do a logout link?
- What's the correct way to handle the session? Should this all be handled by the `Outseta.min.js` script? And how can that integrate with NEXT.js?
