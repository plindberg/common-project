# Monies likes to tell Git to ignore files

We use [GitHub’s collection of .gitignores](https://github.com/github/gitignore) and collect
commonalities here.

## Format of the .gitignore

Use the following template for the .gitignore of a project.

```
# Local ignores go here.

# This is based on our own and GitHub’s gitignores, as indicated by BEGIN/END markers below.
# To simplify updates, keep used gitignores as original, except where commenting out optionals.

# Used gitignores: monieshq/Node, monieshq/Bluemix, github/Node

# --- BEGIN: monieshq/Node

# Include the contents of Node.gitignore from github/gitignore here.

# --- END: monieshq/Node

# --- BEGIN: monieshq/Bluemix

# Include the contents of Bluemix.gitignore from github/gitignore here.

# --- END: monieshq/Bluemix

# --- BEGIN: github/Node

# Include the contents of Node.gitignore from github/gitignore here.

# --- END: github/Node
```
