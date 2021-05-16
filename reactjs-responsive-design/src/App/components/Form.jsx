import styled from "styled-components";
import Form from "ui/components/Form";

const OverridedForm = styled(Form)`
    width: 50%;
    margin: 20px auto;
`;

OverridedForm.Field = Form.Field;

export default OverridedForm;
