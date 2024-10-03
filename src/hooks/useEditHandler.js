import { useNavigate } from "react-router-dom";

export function useEditHandler() {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/admin/edit/${id}`);
  };

  return { handleEdit };
}
