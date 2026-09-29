export function useRegister() {
  const [users, setUsers] = useState([]);

  function registerUser(user) {
    setUsers(prev => [...prev, user]);
  }

  return { users, registerUser };
}