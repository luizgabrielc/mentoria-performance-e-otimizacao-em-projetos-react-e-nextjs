import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BadUserForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <form className="grid gap-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="name"
          id="name"
          name="name"
          placeholder="Name"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="age">Idade</Label>
        <Input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="text"
          id="age"
          name="age"
          placeholder="Idade"
        />
      </div>
    </form>
  );
};

export default BadUserForm;
