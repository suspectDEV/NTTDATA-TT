# NTTDATA - TT

https://nttdata.alxfl.co/

## Getting started

Install node packages and serve application.
```
yarn
yarn dev
```

### Folder structure
    ├── ...
    ├── src/
    │   └── components/             # Reusable components
    │   │   └── form/               # For forms
    │   │   └── modalComponent/     # For modals
    │   │   └── userResume/         # For user information
    │   ├── data/                   # Database simulation
    │   │   └── users.json          # Seed information
    │   ├── styles/                 # CSS files
    │   │   └── index.css           # ..subfile
    │   │   └── styles.css          # ..subfile
    │   ├── App.tsx                 # Routes
    │   ├── main.tsx                # Startup
    │   └── vite-env.d.ts           # Environment vars
    └── ...

### Seed information
Customize data user in `data/users.json`. The file contain some records:

1. Passport
- 20100100100
- 20100100101
- 20100100103
- 20100100104
- 20100100105
- 20100100106
- 20100100107

2. DNI
- 10100100100
- 10100100102
- 10100100103
- 10100100104
- 10100100105

<hr />
<sub><sup>© 2022 suspect</sup></sub>
