Gonzalo's preferred file structure

src
|
+-- app               # application layer containing:
|   |
|   +-- pages         # application routes / can also be called pages
    +-- app.tsx       # main application component
    +-- app-provider  # application provider that wraps the entire application with global providers
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # global configurations, exported env variables etc.
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # reusable libraries preconfigured for the application
|
+-- stores            # global state stores
|
+-- test              # test utilities and mocks
|
+-- types             # shared types used across the application
|
+-- utils             # shared utility functions