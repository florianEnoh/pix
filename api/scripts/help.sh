#! /bin/bash

echo "Usage: npm run COMMAND"
echo ""
echo "  help               # display the available NPM tasks"
echo "  clean              # delete NPM node_modules folder"
echo "  start              # run the API in development mode (proxyfied by Mirage)"
echo "  start:watch        # run the API in development mode with sources-watching / hot-reloading"
echo "  db:migrate         # execute the DB migration scripts"
echo "  db:seed            # execute the DB seeding scripts"
echo "  test               # run the tests"
echo "  test:watch         # run the tests with sources-watching / hot-reloading"
echo "  lint               # check ESLint linting rules"
echo "  coverage:check     # calculate the code coverage and generate a report into folder ../coverage"
echo "  coverage:rename    # rename the generated code coverage report"
echo "  coverage           # calculate the code coverage and rename the report (used for CI)"
echo "  deploy:integration # deploy the API on an integration (feature branch / review app) environment"
echo "  deploy:staging     # deploy the API on staging environment"
echo "  deploy:production  # deploy the API on production environment"
echo ""
