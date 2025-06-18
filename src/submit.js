// submit.js
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import Swal from 'sweetalert2';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);

    const handleClick = async () => {
        try {
            const response = await fetch('https://ksosoog08g0wk8sccww4skso.167.235.255.190.sslip.io/pipelines/parse', 
                {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
            
            
            // Show beautiful alert with pipeline information
            Swal.fire({
                title: 'Pipeline Info',
                html: `
                    <div class="text-center" style ="font-size: 1rem;">
                        <p>Number of nodes: ${data.num_nodes}</p>
                        <p>Number of edges: ${data.num_edges}</p>
                        <p>Is it a DAG?: ${data.is_dag ? ' Yes' : ' No'}</p>
                    </div>
                `,
                icon:  'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#6B46C1', // Purple to match your theme
                background: '#1a1a1a', // Dark background
                color: '#ffffff', // White text
                draggable: true,
                width: 'auto',
                padding: '1rem',
            });

        } catch (error) {
            console.error('Failed to submit pipeline:', error);
            // Show error alert
            Swal.fire({
                title: 'Error',
                text: 'Failed to submit pipeline. Check if your backend is running. and try again.',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#6B46C1',
                background: '#1a1a1a',
                color: '#ffffff',
            });
        }
    }

    return (
        <div className="flex items-center justify-center mt-4">
            <button 
                type="submit" 
                onClick={handleClick}
                className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
                Submit
            </button>
        </div>
    );
}
