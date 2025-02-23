import React, { useState } from "react";
import { Card, CardContent, Typography, Chip, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const PropertyCard = ({ property }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <Card
      className="group"
      sx={{
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        width: "100%",
        padding: 1,
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Property Image with Label */}
      <div className="relative">
        <img
          src="/images/propertyImagePlaceholder.svg"
          alt="Property"
          className="w-full rounded-t-lg group-hover:scale-110 transition-all duration-200 ease-linear"
        />
        <Chip
          label="Commercial"
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "#0d253f",
            color: "#fff",
            fontSize: "12px",
          }}
        />
      </div>

      {/* Card Content */}
      <CardContent sx={{ padding: "4px", marginTop: "10px" }}>
        <p className="text-sm font-semibold text-gray-600">{property.title}</p>

        <div className="flex justify-between items-center text-sm text-gray-600 mt-1">
          <Typography variant="body2">{property.type}</Typography>
          <Typography variant="body2">
            <strong>Sq. {property.size}</strong> Meter
          </Typography>
        </div>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: 1, fontSize: "10px" }}
        >
          Start From
        </Typography>

        <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "12px" }}>
          ₹ {property.price}/ Month
        </Typography>

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ fontSize: "10px" }}
        >
          + taxes & charges
        </Typography>
      </CardContent>

      {/* Footer Button */}
      <div>
        <Button
          fullWidth
          variant={hovered ? "outlined" : "contained"}
          sx={{
            backgroundColor: hovered ? "transparent" : "#28a745",
            color: hovered ? "#007bff" : "white",
            borderColor: hovered ? "#007bff" : "transparent",
            "&:hover": {
              backgroundColor: hovered ? "transparent" : "#218838",
              borderColor: hovered ? "#0056b3" : "transparent",
            },
          }}
          onClick={() =>
            navigate(`/property-board/${property.title.split(" ").join("-")}`)
          }
        >
          {hovered ? "View Details" : "Vacant"}
        </Button>
      </div>
    </Card>
  );
};

export default PropertyCard;
