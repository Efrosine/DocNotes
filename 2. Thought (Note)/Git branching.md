membuat timeline baru tanpa menggangu timeline utama agar mempermudah saat develope
branch dibuat saat ingin membuat fitur baru

### keyword
- git branch --show-curent -> menampilkan branch saat ini
- git branch < nama branch baru > -> membuat branch baru yang bercabang dari cabang sekarang
- git branch --list melihat semua branch
- git switch < nama branch > / git checkout < nama branch > -> pindah branch
- git branch -m < nama baru > -> rename branch name (harus ada di branch tujuan)
- git branch -d < nama branch > -> menghapus branch (harus di luar branch)
- git merge < nama branch  > -> menyalin hasil dari pendonor ke penerima (berada di branch yang akan menerima merge)
- jikalau nada conflict harus di perbaiki secara manual dan di commit secara manual juga
- git cherry-pick < hash > -> menyalin hasil dari commit tertentu ke tujuan (harus berada di branch tujuan)
- git tag < nama > < hash > -> membaut tag baru. bertujuan untuk menandai commit id seperti HEAD (best practice saat perilisan sebuah aplikasi)
- git tag -l -> melihat semua tag
- git checkout < tag > -> berpindah dengan tag
- git tag -d < nama tag > -> delete tag
- git stash push -m < mesage >  -> menambahkan perubahan ke stash
- git stash show stashId -> melihat perubahan di stash
- git stash list -> melihat list stash
- git stash applay stashId -> menyalin perubahan yang ada di stash
- git stash drop stashId -> menghapus stash tertentu
- git stash clear -> menghapus semua stash
- git rebase < nama branch > membuat branch saat ini menjadi satu timeline dengan branch percabangan awal(berada di branch akhir)
- jika ingin head dari branch percabangan awal ingin sama dengan branch saat ini tinggal di merge dari branch awal