# Portfolio Development Workflow

This repository uses a preview-first workflow.

1. Develop changes on `feature/portfolio-redesign`.
2. Vercel creates a Preview Deployment for branch commits.
3. Review the preview before merging.
4. Continue revisions on the same feature branch until approved.
5. Merge the approved branch into `main`.
6. Vercel automatically deploys `main` to Production.

## Branch roles

- `main`: production-ready, approved version
- `feature/portfolio-redesign`: active portfolio design/content work

Do not commit routine portfolio edits directly to `main`.
