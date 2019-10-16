# Logging API

Contains all the layers that make up the Logging API.

- [logging.contracts](./logging.contracts)
- [logging.services](./logging.services)
- [logging.repositories.sequelize](./logging.repositories.sequelize)

## Motivation

The goal of this package is to reduce the effort required for maintaining the ProcessEngine, particularly the runtime layer.

It combines what was previously known as the "Logging Layer APIs" into a single API, located in a single GitHub repository.

The functions from the following packages are included:

- [logging_api_contracts](https://github.com/process-engine/logging_api_contracts)
- [logging_api_core](https://github.com/process-engine/logging_api_core)
- [logging.repository.sequelize](https://github.com/process-engine/logging.repository.sequelize)

## How to use

The structure of the services, repos, etc. remains as it was before, as do the corresponding IoC registrations.
So with regards to your npm dependencies, you don't have to do anything.
