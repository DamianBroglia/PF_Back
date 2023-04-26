Microsoft Windows [Versión 10.0.19044.2846]
(c) Microsoft Corporation. Todos los derechos reservados.

C:\Henry curso\PF_Back>git init
Reinitialized existing Git repository in C:/Henry curso/PF_Back/.git/

C:\Henry curso\PF_Back>git checkout main
Already on 'main'
M       package.json
M       src/db.js
Your branch is up to date with 'origin/main'.

C:\Henry curso\PF_Back>git checkout
M       package.json
M       src/db.js
Your branch is up to date with 'origin/main'.

C:\Henry curso\PF_Back>git checkout -b "Omar_Modelos"
Switched to a new branch 'Omar_Modelos'

C:\Henry curso\PF_Back>git status
On branch Omar_Modelos
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   package.json
        modified:   src/db.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        src/models/
        src/routes/

no changes added to commit (use "git add" and/or "git commit -a")

C:\Henry curso\PF_Back>git add .

C:\Henry curso\PF_Back>git status
On branch Omar_Modelos
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   package.json
        modified:   src/db.js
        new file:   src/models/Activity.js
        new file:   src/models/Comment.js
        new file:   src/models/Hotel.js
        new file:   src/models/Package.js
        new file:   src/models/User.js
        new file:   src/models/reservation.js
        new file:   src/models/restaurant.js
        new file:   src/routes/index.js


C:\Henry curso\PF_Back>git commit -m "modelos"        
[Omar_Modelos e4a04dc] modelos
 10 files changed, 241 insertions(+), 3 deletions(-)
 create mode 100644 src/models/Activity.js
 create mode 100644 src/models/Comment.js
 create mode 100644 src/models/Hotel.js
 create mode 100644 src/models/Package.js
 create mode 100644 src/models/User.js
 create mode 100644 src/models/reservation.js
 create mode 100644 src/models/restaurant.js
 create mode 100644 src/routes/index.js

C:\Henry curso\PF_Back>git push -u origin Omar_Modelos
Enumerating objects: 19, done.
Counting objects: 100% (19/19), done.
Delta compression using up to 4 threads
Compressing objects: 100% (14/14), done.
Writing objects: 100% (15/15), 2.02 KiB | 258.00 KiB/s, done.
Total 15 (delta 8), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (8/8), completed with 2 local objects.
remote: 
remote: Create a pull request for 'Omar_Modelos' on GitHub by visiting:
remote:      https://github.com/DamianBroglia/PF_Back/pull/new/Omar_Modelos
remote:
To https://github.com/DamianBroglia/PF_Back.git
 * [new branch]      Omar_Modelos -> Omar_Modelos
Branch 'Omar_Modelos' set up to track remote branch 'Omar_Modelos' from 'origin'.

C:\Henry curso\PF_Back>