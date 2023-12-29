{
  let t = f();
  t = t * t + 1;
}

let x = do {
  let t = f();
  t * t + 1;
};

// 等同于 <表达式>
do { <表达式>; }

// 等同于 <语句>
do { <语句> }

let x = do {
  if (foo()) { f() }
  else if (bar()) { g() }
  else { h() }
};


return (
  <nav>
    <Home />
    {
      do {
        if (loggedIn) {
          <LogoutButton />
        } else {
          <LoginButton />
        }
      }
    }
  </nav>
)