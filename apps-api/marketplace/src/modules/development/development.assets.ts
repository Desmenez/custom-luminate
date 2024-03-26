export const impersonateUi = `
<html>
<body>
<style>
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100dvh;
    font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    margin: 0;
    padding: 0;
  }
</style>
<main>
  <form method="post">
    <h1>Impersonate user</h1>
    <button type="submit" name="predefined-user-student1">student1</button>
    <button type="submit" name="predefined-user-student2">student2</button>
    <button type="submit" name="predefined-user-student3">student3</button>
    <button type="submit" name="predefined-tutor-tutor1">tutor</button>
    <button type="submit" name="predefined-user-admin">admin</button>
  </form>
  <form method="post">
    <h3>Custom user id</h3>
    <input name="userId" required />
    <br>
    <button type="submit" name="custom-user">Login as user</button>
    <button type="submit" name="custom-tutor">Login as tutor</button>
  </form>
</main>
</body>
</html>
`
