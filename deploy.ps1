$env:Path = [System.Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [System.Environment]::GetEnvironmentVariable('Path','User')
git init
git remote remove origin
git remote add origin https://github.com/Naitik-xd/Hackathon-2.git
git add .
git commit -m "feat: NeuralOps landing page - Frontend Battle 3.0 submission"
git branch -M main
git push -u origin main --force
