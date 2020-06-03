In combination with my-json-server and a small + free azure function, this repo functions as a lightweight API.

For example, try visting: 

You'll see that there we receive percl sourced from json objects here.

This is great for example applications that rely on assumed responses. For example, setting up call 
forwarding for a franchise, and assuming they have some existing locations. "Existing location" PerCL will be defined
statically here, and associated with a number + application on an existing vail account.

This allows new users to create examples with hardcoded phone numbers for things like simulated voicemail boxes etc, 
with no cost of managing a live deployment API.

Additionally, if your application is completely static, you could host your entire FreeClimb application out of a 
github repo like this just by writing PerCL response objects with no code.
