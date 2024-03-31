import { Alert, Button, Card, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

export const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { /*loading,*/ error: errorMessage } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Todos os campos são obrigatórios."));
    }

    try {
      dispatch(signInStart());
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!data.success) {
        dispatch(signInFailure(data.message));
      }
      if (response.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <section className="min-h-screen mt-20">
      <div className="flex p-3 max-w-sm mx-auto flex-col items-center gap-5 sm:py-12">
        <Card className="w-full h-full">
          <h1 className="text-center text-2xl font-semibold mb-4">Login</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label value="Seu email" />
              <TextInput
                type="email"
                placeholder="Digite seu email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Senha" />
              <TextInput
                type="password"
                placeholder="Digite sua senha"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              color="gray"
              className="bg-primary text-white"
              type="submit"
            >
              Entrar
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Não tem registro?</span>
            <Link to="/registrar" className="text-blue-500">
              Criar conta.
            </Link>
          </div>
          {errorMessage && <Alert>{errorMessage}</Alert>}
        </Card>
      </div>
    </section>
  );
};
