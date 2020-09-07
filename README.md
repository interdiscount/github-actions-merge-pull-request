# Merge Pull Request
Merge a Pull Request in your Workflow.

## Inputs

### `github-token`

**Required** The Token to interact with the Github API.

### `head-branch`

**Required** Branch to merge into base branch.

### `base-branch`

**Required** Base Branch to merge into.

### `label-name`

**Required** Label to filter. Default `"automerge"`.

## Example usage

```
uses: interdiscount/github-actions-create-pull-request@master
with:
  github-token: ${{ secrets.GITHUB_TOKEN }}
  head-branch: "acceptance"
  base-branch: "development"
  label-name: "automerge"
```
