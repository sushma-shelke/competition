import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const faqs = [
    {
      question: "Can a user submit multiple products?",
      answer:
        "No, each user can submit only a single product for the competition.",
    },
    {
      question: "In which categories can products be submitted?",
      answer:
        "Products can be submitted in the following categories: Fashion Element, Art and Craft, Food and Drinks, Apparel, Home Decor, Divine Things, and Homemade.",
    },
    {
      question: "Is there an entry fee?",
      answer: "No, there is no entry fee to participate in the competition.",
    },
    {
      question: "How will the products be judged?",
      answer:
        "Products will be judged based on creativity, uniqueness, and the number of user votes. The product with the highest combination of these factors will be declared the winner.",
    },
    {
      question: "What are the prizes?",
      answer:
        "Prizes include gift vouchers, a feature in our blog, and exclusive promotion opportunities. Details will be provided closer to the competition date.",
    },
    {
      question: "Can I edit my Product after submitting it?",
      answer: "No, you cann't edit your Product once its submitted.",
    },
    {
      question: "Do I need to be logged in to register a product?",
      answer:
        "Yes, users must be logged in to register a product for the competition. Please log in or create an account to submit your product.",
    },
  ];

  return (
    <Box sx={{ maxWidth: "90%", margin: "0 auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
