import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type UserType = { name: string; email: string; age: string };

const initialValues: UserType = { name: "", email: "", age: "" };

const GoodUserForm = () => {
  const [user, setUser] = useState<UserType>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="grid gap-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          value={user.email}
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          value={user.name}
          onChange={handleChange}
          type="name"
          id="name"
          name="name"
          placeholder="Name"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="age">Idade</Label>
        <Input
          value={user.age}
          onChange={handleChange}
          type="number"
          id="age"
          name="age"
          placeholder="Idade"
        />
      </div>
    </form>
  );
};

export default GoodUserForm;
