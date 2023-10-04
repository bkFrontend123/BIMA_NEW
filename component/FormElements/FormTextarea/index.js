import React from "react";

import { Form } from "react-bootstrap";

import form from "@/assets/css/form.module.css";

export default function FormTextarea(props) {
    const { label, text } = props;
    return (
        <>
            <Form.Group className="mb-4">
                <Form.Label
                    htmlFor={label}
                    className={`${form.formLabel}`}
                >
                    {label}
                </Form.Label>
                <Form.Control
                    className={`${form.FormTextarea}`}
                    type="text"
                    placeholder="&nbsp;"
                    required
                    as="textarea"
                />
            </Form.Group>
        </>
    )
}
