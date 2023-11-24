import { Button, Form } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NextButton({ form }) {
    const [submittable, setSubmittable] = useState(false);
    const values = Form.useWatch([], form);
    const navigate = useNavigate();

    useEffect(() => {
      form
        .validateFields({
          validateOnly: true,
        })
        .then(
          () => setSubmittable(true),
          () => setSubmittable(false)
        );
    }, [values]);
  
    const handleNextButtonClick = () => {
      navigate("/work-space");
    };
  
    return (
      <Button
        htmlType="submit"
        onClick={handleNextButtonClick}
        disabled={!submittable}
        block
      >
        다음
      </Button>
    );
  }