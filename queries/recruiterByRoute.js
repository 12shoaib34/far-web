export const getRecruitersByRoute = async (filters) => {
  const baseUrl = "https://api.findrecruiters.com/graphql";
  const query = `
        query getExtractedRecruiterByRoute (
          $route: String!
        ) {
          getExtractedRecruiterByRoute (route: $route) {
            id
            name
            website
            area
            rating
            totalRatings
            businessStatus
            phoneNumber
            experience
            formattedAddress
            lat
            lng
            logo
            countryId
            route
            openingHours {
                weekday_text
            }
            IndustrySpecialisationOnExtractedRecruiter {
                industrySpecialisationId
                IndustrySpecialisation {
                name
             }
            }
         }
        }
      `;
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: filters, // Passing filters as variables
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();

    console.log(result);

    return result?.data?.getExtractedRecruiterByRoute || null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
