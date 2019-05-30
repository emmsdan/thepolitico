import { generateFormData } from './form';

describe('Auto Form Generator', () => {
  const formFields = [
    { name: 'username', value: 'exampleusername' },
    { name: 'firstName', value: 'Example' },
    { name: 'lastName', value: 'My Name' },
  ];

  it('should get a token successfully', () => {
    const formData = generateFormData(formFields);
    expect(formData).toBeInstanceOf(Object);
    expect(formData).toHaveProperty('username', 'firstName', 'lastName');
    expect(formData.username).toBe('exampleusername');
  });
});
