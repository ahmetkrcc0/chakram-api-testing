Started by user unknown or anonymous
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in C:\ProgramData\Jenkins\.jenkins\workspace\Chakram-api-testing
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Checkout)
[Pipeline] git
The recommended git tool is: NONE
No credentials specified
 > C:\Program Files\Git\bin\git.exe rev-parse --resolve-git-dir C:\ProgramData\Jenkins\.jenkins\workspace\Chakram-api-testing\.git # timeout=10
Fetching changes from the remote Git repository
 > C:\Program Files\Git\bin\git.exe config remote.origin.url https://github.com/ahmetkrcc0/chakram-api-testing.git # timeout=10
Fetching upstream changes from https://github.com/ahmetkrcc0/chakram-api-testing.git
 > C:\Program Files\Git\bin\git.exe --version # timeout=10
 > git --version # 'git version 2.43.0.windows.1'
 > C:\Program Files\Git\bin\git.exe fetch --tags --force --progress -- https://github.com/ahmetkrcc0/chakram-api-testing.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > C:\Program Files\Git\bin\git.exe rev-parse "refs/remotes/origin/main^{commit}" # timeout=10
Checking out Revision 6fb09cda0b191379617f7edc2c6a5bcfc9cde065 (refs/remotes/origin/main)
 > C:\Program Files\Git\bin\git.exe config core.sparsecheckout # timeout=10
 > C:\Program Files\Git\bin\git.exe checkout -f 6fb09cda0b191379617f7edc2c6a5bcfc9cde065 # timeout=10
 > C:\Program Files\Git\bin\git.exe branch -a -v --no-abbrev # timeout=10
 > C:\Program Files\Git\bin\git.exe branch -D main # timeout=10
 > C:\Program Files\Git\bin\git.exe checkout -b main 6fb09cda0b191379617f7edc2c6a5bcfc9cde065 # timeout=10
Commit message: "fix"
 > C:\Program Files\Git\bin\git.exe rev-list --no-walk 6fb09cda0b191379617f7edc2c6a5bcfc9cde065 # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Install)
[Pipeline] bat

C:\ProgramData\Jenkins\.jenkins\workspace\Chakram-api-testing>npm install chakram 

changed 1 package, and audited 132 packages in 2s

20 packages are looking for funding
  run `npm fund` for details

3 moderate severity vulnerabilities

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
[Pipeline] bat

C:\ProgramData\Jenkins\.jenkins\workspace\Chakram-api-testing>npm install mocha 

changed 1 package, and audited 132 packages in 1s

20 packages are looking for funding
  run `npm fund` for details

3 moderate severity vulnerabilities

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Run)
[Pipeline] bat

C:\ProgramData\Jenkins\.jenkins\workspace\Chakram-api-testing>npm test 

> chakram-api-testing@1.0.0 test
> mocha tests/ --timeout 90000  --exit

(node:31424) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)


  User Tests
    1) GET /v2/user/{userName}
    âœ” GET /v2/user/logout (161ms)
    âœ” GET /v2/user/login (163ms)
    âœ” POST /v2/user userCreate (165ms)
    âœ” PUT /v2/user userUpdate (160ms)
    âœ” DELETE /v2/user/{username} (160ms)


  5 passing (2s)
  1 failing

  1) User Tests
       GET /v2/user/{userName}:
     AssertionError: expected status code 404 to equal 200
  



[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
ERROR: script returned exit code 1
Finished: FAILURE
