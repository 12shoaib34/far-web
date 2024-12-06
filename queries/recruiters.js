export const getRecruiters = async (filters) => {
  const baseUrl = "https://api.findrecruiters.com/graphql";
  const query = `
      query searchExtractedRecruitersByPagination (
         $pageNumber: Int
         $industrySpecialisationIds: [Int!]
         $search: String
      ) {
        searchExtractedRecruitersByPagination (
          pageNumber: $pageNumber
          industrySpecialisationIds: $industrySpecialisationIds
          search: $search
        ) {
          pages
          count
          data {
            id
            name
            website
            area
            rating
            totalRatings
            businessStatus
            phoneNumber
            experience
            lat
            lng
            logo
            countryId
            route
            metaTitle
            metaDescription
            formattedAddress
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

    return result?.data?.searchExtractedRecruitersByPagination || null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
